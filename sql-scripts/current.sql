-- Applied-by-user: <unknown yet>
-- Generated-at: 2025-02-14 13:30
BEGIN;
  -- 게시글 테이블
  CREATE TABLE IF NOT EXISTS public.admin_posts (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    category TEXT NOT NULL DEFAULT '일반' CHECK (category IN ('공지사항', '일반')),
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    author_name TEXT NOT NULL DEFAULT '관리자',
    views INTEGER NOT NULL DEFAULT 0,
    badge TEXT,
    badge_color TEXT,
    is_notice BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    deleted_at TIMESTAMPTZ
  );

  ALTER TABLE public.admin_posts DISABLE ROW LEVEL SECURITY;

  CREATE INDEX IF NOT EXISTS idx_admin_posts_created_at_desc
    ON public.admin_posts (created_at DESC);
  CREATE INDEX IF NOT EXISTS idx_admin_posts_is_notice
    ON public.admin_posts (is_notice);
  CREATE INDEX IF NOT EXISTS idx_admin_posts_deleted_at_null
    ON public.admin_posts (deleted_at)
    WHERE deleted_at IS NULL;

  -- 첨부파일 테이블
  CREATE TABLE IF NOT EXISTS public.admin_post_files (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    post_id BIGINT NOT NULL REFERENCES public.admin_posts(id) ON DELETE CASCADE,
    filename TEXT NOT NULL,
    original_name TEXT NOT NULL,
    file_size BIGINT NOT NULL,
    mime_type TEXT,
    file_url TEXT NOT NULL,
    storage_path TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  );

  ALTER TABLE public.admin_post_files DISABLE ROW LEVEL SECURITY;

  CREATE INDEX IF NOT EXISTS idx_admin_post_files_post_id
    ON public.admin_post_files (post_id);
  CREATE INDEX IF NOT EXISTS idx_admin_post_files_created_at
    ON public.admin_post_files (created_at DESC);

  -- 기존 테이블에도 필드가 누락되지 않도록 보강
  ALTER TABLE public.admin_post_files
    ADD COLUMN IF NOT EXISTS file_size BIGINT NOT NULL DEFAULT 0;
  ALTER TABLE public.admin_post_files
    ALTER COLUMN file_size DROP DEFAULT;

  -- 업데이트 타임스탬프 트리거
  CREATE OR REPLACE FUNCTION public.touch_updated_at()
  RETURNS TRIGGER AS $$
  BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
  END;
  $$ LANGUAGE plpgsql;

  DROP TRIGGER IF EXISTS trg_admin_posts_touch_updated_at ON public.admin_posts;
  CREATE TRIGGER trg_admin_posts_touch_updated_at
    BEFORE UPDATE ON public.admin_posts
    FOR EACH ROW
    EXECUTE FUNCTION public.touch_updated_at();

  -- ROLLBACK: drop table public.admin_post_files; drop table public.admin_posts;
COMMIT;
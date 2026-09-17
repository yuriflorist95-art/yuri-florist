import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper Fungsi Terbaru & Terkuat untuk Google Drive
export function formatDriveUrl(url) {
  if (!url) return '';

  // Menarik ID unik dari berbagai jenis format Link Google Drive
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/) || 
                url.match(/id=([a-zA-Z0-9_-]+)/) ||
                url.match(/file\/d\/([a-zA-Z0-9_-]+)/);

  if (match && match[1]) {
    // Menggunakan CDN resmi Google agar gambar langsung tampil tanpa terblokir
    return `https://lh3.googleusercontent.com/d/${match[1]}`;
  }

  return url;
}
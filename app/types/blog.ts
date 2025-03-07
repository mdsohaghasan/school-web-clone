export interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
  category: string;
  excerpt: string;
}

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  postsPerPage: number;
} 
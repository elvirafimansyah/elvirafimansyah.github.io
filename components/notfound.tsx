import { Search } from 'lucide-react';
interface NotFoundProps {
  title?: string;
  description?: string;
  size: string;
  size_md?: string; 
}
const NotFound: React.FC<NotFoundProps> = ({ title, description, size, size_md }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-3 py-10 ">
      <Search size="40px" className="text-primary" />
      <div className="text-center">
        <h1 className={`font-bold text-${size} md:text-${size_md}`}>{title} </h1>
        <p className="text-desc font-medium">{description}</p>
      </div>
    </div>
  );
}

export default NotFound;

// Halaman Tidak Tersedia
// Maaf, halaman yang ingin Anda cari tidak ada atau ditemukan.
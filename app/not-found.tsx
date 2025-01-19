import Container from "@/components/container";
import { Search } from 'lucide-react';

const NotFound = () => {
  return (  
    <Container>
      <section className="py-28">
        <div className="flex flex-col items-center justify-center space-y-3 py-24 ">
          <Search size="40px" className="text-primary"/>
          <div className="text-center space-y-2">
            <h1 className="font-bold text-3xl md:text-4xl leading-title">Oops! That page can&apos;t be found </h1>
            <p className="text-desc font-medium leading-desc">It looks like nothing was found at this location. Maybe try searching?</p>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default NotFound;
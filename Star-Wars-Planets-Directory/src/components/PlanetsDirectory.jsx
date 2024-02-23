import React, { useState, useEffect } from 'react';
import PlanetCard from './PlanetCard';
import Pagination from './Pagination';

const PageDirectory = () => {
  const [planets, setPlanets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchPlanets();
  }, [currentPage]);

  const fetchPlanets = async () => {
    try {
      const response = await fetch(`https://swapi.dev/api/planets/?page=${currentPage}`);
      const data = await response.json();
      setPlanets(data.results);
      setTotalPages(Math.ceil(data.count / 10));
    } catch (error) {
      console.error('Error fetching planets:', error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="page-directory">
        {planets.map(planet => (
          <PlanetCard key={planet.url} planet={planet}/>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PageDirectory;

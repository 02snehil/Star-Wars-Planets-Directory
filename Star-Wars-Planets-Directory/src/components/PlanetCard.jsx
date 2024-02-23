import React, { useState, useEffect } from 'react';

const PlanetCard = ({ planet }) => {
  const [residents, setResidents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResidents = async () => {
      setLoading(true);
      try {
        const residentRequests = planet.residents.map(url =>
          fetch(url).then(response => response.json())
        );    
        const residentData = await Promise.all(residentRequests);
        setResidents(residentData);
      } catch (error) {
        setError(error); 
        console.error('Error fetching residents:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResidents();
  }, [planet.residents]);

  if (error) {
    return <div>Error fetching residents: {error.message}</div>;
  }

  return (
    <div className="planet-card">
      <h2><u>{planet.name}</u></h2>
      <ul>
        <li>
         <b>Climate: </b> {planet.climate}
        </li>
        <li>
         <b>Population: </b> {planet.population}
        </li>
        <li>
         <b>Terrain: </b> {planet.terrain}
        </li>
        <li>
          <h3>Residents: </h3>
        
             {loading ? (
                   <p>Loading residents...</p>
                ) : (
          <table border={1} 
                 cellPadding={10} 
                 cellSpacing={10}>
            <thead>
              <tr>
                <th>Resident Name</th>
                <th>Resident Height</th>
                <th>Resident Weight</th>
                <th>Resident Gender</th>
              </tr>
            </thead>
            <tbody>
              {residents.map(resident => (
                <tr key={resident.url}>
                  <td>{resident.name}</td>
                  <td>{resident.height} cm</td>
                  <td>{resident.mass} kg</td>
                  <td>{resident.gender}</td>
                </tr>
                ))}
            </tbody>
            <tfoot></tfoot>
          </table>
         )}
        </li>
      </ul>
    </div>
  );
};

export default PlanetCard;

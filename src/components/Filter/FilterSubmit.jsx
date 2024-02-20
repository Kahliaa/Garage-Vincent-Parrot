import React from 'react';
import Price from './Price';
import Kilometre from './Kilometre';
import Year from './Year';

export default function FilterSubmit({
    selectedPrice,
    selectedKm,
    selectedYear,
    changePrice,
    changeKm,
    changeYear,
}) {

    return (
        <>
            <div className='cars-filter'>
                <h3>Kilométrage</h3>
                <Kilometre value={selectedKm} onChange={changeKm}/>
            </div>
            <div className='cars-filter'>
                <h3>Prix</h3>
                <Price value={selectedPrice} onChange={changePrice}/>
            </div>
            <div className='cars-filter'>
                <h3>Année</h3>
                <Year value={selectedYear} onChange={changeYear}/>
            </div>
        </>
        
    );
}
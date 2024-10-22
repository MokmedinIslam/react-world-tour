const CountryData = ({country, handleVisitedCountries, handleVisitedFlags}) => {
    console.log('inside country data', country, handleVisitedCountries, handleVisitedFlags)
    return (
        <div>
            <p><small>Country Data: {country.name.common}</small></p>
        </div>
    );
};

export default CountryData;
import "./ChartBar.css";

const ChartBar = ({ month, value,max ,total }) => {
  let h = "0%";
  if(max>0){ //controle du cas de division par 0
   h = Math.round((value/max)*100); //constante car on va creer plusieurs instances de h pour chacune de  chartBar w kol wahda va etre indepe,dante de l'autre c pour cela const , w ken zedt chart bech yetbaddal l state du composant ==> fera re-render ==> reinitialisation des variables js (maaneha yfassakha l variable heki w y3awed yasnaaha jemla wahda donc yetsammech baddlelha sa valeur )c une notion propre à l'orienté objet pas react car on instancie une fonction (component par exemple ) --> ses variables sont instanciés aussi 
}
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height: `${h}%`}}></div> 
      </div>
      <p className="chart-bar__label">{month}</p>
    </div>
  );
};

export default ChartBar;
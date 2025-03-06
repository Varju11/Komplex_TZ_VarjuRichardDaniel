import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
function Home() {
    const [data, setData] =useState('');
    const [showTable, setShowTable]= useState('');
    const [kivalasztottAdatok, setKivalasztottAdatok] = useState('');
     useEffect(()=>
     axios.get(`http://localhost:3308/adatok?keres=${keres}`)
     .then(response => setData(response.data))
     .catch(error =>console.error("Hiba:",error))
     )
     const toggleTable=(id)=>{
        (showTable === id ? null :id);
     }
     


    return (
 <>
            <div className="co-fluidntainer">
                <div className="row">
                    <div className="col-md-4" style={{backgroundColor:"beige"}}>
                        <h3>Központi felvételi tájékoztató</h3>
                        <p>A középiskolába történő jelentkezés során az<br/> iskolák határozzák meg, hogy a felvételi rangsort<br/> mi alapján döntik el. A Jószakma Szakgimnázium<br/> a felvtételi során az általános iskolából hozott és a<br/> központi felvételin szerzett pontok alapján<br/> rangsorolja az iskolába jelentkezőket</p><a href='https://www.oktatas.hu/kozneveles/kozepfoku_felveteli_eljaras/kozepfoku_felveteli_eljaras_informacioi' target="_blank">Tájékoztató oldal</a><br />
                        <p><img src="./logo.png"   /></p>
                    </div>
                    <div className="col-md-4">
                        <h1>Tájékoztatás</h1> 
                        <h3>Jószakma Szakgimnázium</h3>
                        <p>A központi felvételi magyar és irodalom,<br/> illetve matematika tantárgyakból írják a<br/>jelentkezők. Mindkét tárgy esetén legfeljebb 50<br/> pont szerezhető. A felvételiző hozott pontjait az<br/>általános iskolai év végi eredményei alapján<br/>számolják, ez a pontszám legfeljebb 50 pont<br/>lehet. A hozott pontokat duplázzák. A központi<br/>felvételin szerzett és a hozott pontok összessége<br/>adja a felvételiző összesített pontszámát.</p>
                        <p><img src="./e-mail-marketing.jpg"   className="img-thumbnail" /></p>
                    </div>
                    <div className="col-md-4" style={{backgroundColor:"beige"}}>
                    <h3>Az oldal használatáról</h3>
                    <p>Ön az oldal használatávaal a következö <br/> Információhoz juthat hozzá.</p>
                        <div className='lista'>     
                        <p>Előzetes rangsor:</p>
                        <p>Nevek:</p>
                        <p>Ágazat</p>
                        <p>Összes pontszám</p>
                        <p>Előzetes rangsor nyelvi előkészítő</p>
                        <p>A felvettek névsora</p>
                        </div>
                        
                        
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h3>A felvételt nyert tanulók névsora a nelvi előkészítőre</h3>
                            <label>Válaszd ki mleyik ágazat adatait szeretnéd látni:</label>
                            <select name={kivalasztottAdatok} onChange={(e)=> setKivalasztottAdatok(e.target.  value)} id="">
                          /*      {adatok.map(data)=>{( 
                                   <option value="" key={adatok.data}>{}</option>
                             })}  */       
                                
                            </select>
                            <br/>
                            <button type='submit'>Adatok</button>

                        </div>
                        <div className='col-md-6'>

                        </div>

                    </div>

                    
                    

                </div>
            </div>

        </>
    )

}

 export default Home;
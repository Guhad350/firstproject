import '../style.css';
const About=()=>{ 
    return (
        <>
      <div class="about-section">
  <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
</div>
<h2 className='text'>Our Services</h2>
<div className="row">
  <div className="column">
    <div className="card">
      <div className="container4">  
        <h3>burger</h3>
        <img src='/images/burger.jpg' alt='Burger' />
       
      </div>
    </div>
  </div>
  <div className="column">
    <div className="card">
      <div className="container4">
        <h3>Pizza</h3>
        <img src='/images/pizza.jpg' alt='Pizza' />
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <div className="container4">
        <h3>drink</h3>
        <img src='/images/drink.jpg' alt='Drink' />
       
      </div>
    </div>
  </div>
</div>
     </>   
    )
}
export default About; 
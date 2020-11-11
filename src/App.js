import './App.css';
import welcome from './assets/undraw_project_team_lc5a.svg'

function App() {
  return (
    <>
    <div className="container">
      <header className="header">
        <div className="left">
          <h4 className="title">Safe Communications gives  users peace of mind</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis pariatur, 
            doloremque culpa rerum natus aliquid voluptas sunt ducimus
          </p>
          <div className="btn_container">
            <a href="#" className="btn active">Get started</a>
            <a href="#" className="btn inactive">Learn more</a>
          </div>

        </div>

         <div className="right">
           <img src={welcome} />
         </div>
      </header>
      </div>
     <div className="content">
       <h4 className="header-title">Our Projects</h4>
      <div className="wrapper">
        <div className="box">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat fuga pariatur aut repellat rerum nostrum cupiditate vel animi sit aperiam et suscipit, 
              quibusdam similique unde voluptatem reiciendis quae veritatis. Fugit ad quo in rerum.
              <div className="box-button-container">
              <a href="jf" className="btn active">Learn more</a>
                <a href="#" className="btn inactive">Get started</a>
              </div>
          </div>
        <div className="box">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, animi.
          <div className="box-button-container">
                <a href="jf" className="btn active">Learn more</a>
                <a href="#" className="btn inactive">Get started</a>
              </div>
        </div>
        <div className="box">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, animi.
                    <div className="box-button-container">
              <a href="jf" className="btn active">Learn more</a>
                <a href="#" className="btn inactive">Get started</a>
              </div>
        </div>
        <div className="box">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, animi.
                    <div className="box-button-container">
              <a href="jf" className="btn active">Learn more</a>
                <a href="#" className="btn inactive">Get started</a>
              </div>
        </div>
      </div>
     </div>
    </>
  );
}

export default App;

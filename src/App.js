import './App.css';
import welcome from './assets/undraw_project_team_lc5a.svg'

function App() {
  return (
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

      <main className="content">
        <h3>Projects</h3>
            <div className="wrapper">
                  <div className="box">
                    <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"/>
                  </div>
                  <div className="box">
                    <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"/>
                  </div>
                  
                  <div className="box">
                     <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"/>
                  </div>

                  <div className="box">
                     <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"/>
                  </div>
                  <div className="box">
                     <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"/>
                  </div>
                  <div className="box">
                     <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"/>
                  </div>
                  
            </div>
      </main>
    </div>
  );
}

export default App;

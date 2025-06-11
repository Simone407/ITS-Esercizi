const rootElement=document.querySelector("#root");

const root=ReactDOM.createRoot(rootElement);

const App=(props)=>{
    return(

        <main className="main">
        
        <h1>primo componente</h1>
        {props.children}
        </main>
    )
}

const List = () =>{

    return(

        <ul>
            <li>Javascript</li>
            <li>Python</li>
            <li>PHP</li>

        </ul>

    )
}

root.render(

    <>
    <App>
    <h2>Lista Dev</h2>
    <List></List>
    </App>
    </>

)

function App() {
  
  return (
    <PostComponent/>
  )
  
}

const style = {width: 200, backgroundColor: "white", borderRadius: 10, borderColor:"gray", borderWidth: 5,}

function PostComponent(){
  
  return (
    <div style={style}>

      <img
        src="https://images.hdqwalls.com/wallpapers/sydney-sweeney-beauty-visual-louis-canada-ys.jpg"
        alt="Sydney Sweeny" style={{width: 20, height: 20, borderRadius: 20}}
      />

    </div>
  );

}

export default App

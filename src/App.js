import './App.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import BlogPosts from './pages/BlogPosts';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <main>
      <div class="box-border rounded-sm mx-2 h-24 w-auto p-4 border-1 bg-gradient-to-r from-cyan-600 to-teal-950"></div>
        <div class="flex">
          <Home></Home>
          <BlogPosts></BlogPosts>
        </div>
      </main>
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import '../Assets/CSS/categories.css';
 

const Categories = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  
    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle);
    };
  
    const categories = [
      { id: 1, name: 'Construction', description: 'Building materials and tools' },
      { id: 2, name: 'Marine', description: 'Marine equipment and supplies' },
      { id: 3, name: 'Automotive', description: 'Automotive parts and accessories' },
      { id: 4, name: 'Textile', description: 'Fabrics and textile products' },
      { id: 5, name: 'Furniture', description: 'Home and office furniture' },
      { id: 6, name: 'General', description: 'General goods and services' },
    ];
  
    return (
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
  
        <main className='main-container'>
          <div className='main-title'>
            <h3>CATEGORIES</h3>
          </div>
  
          <div className='categories-content'>
            <table className="categories-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories.map(category => (
                  <tr key={category.id}>
                    <td>{category.id}</td>
                    <td>{category.name}</td>
                    <td>{category.description}</td>
                    <td>
                      <button className="edit-btn">Edit</button>
                      <button className="delete-btn">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    );
  };
  
  export default Categories;
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
// function App() {
//     return(
//         <>
//     <div class="container-1 mb-3">
//     <header class="d-flex flex-wrap align-items-center mb-3 justify-content-center justify-content-md-between py-3 mb-4 border-bottom ">
//       <a href="#" class="d-flex align-items-center col-md-3 mb-3 mb-md-0 text-dark text-decoration-none">
//         Hosptial
//       </a>

//       <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
//         <li><a href="#" class="nav-link px-2 link-secondary">Home</a></li>
//         <li><a href="#" class="nav-link px-2 link-dark">����Խ���</a></li>
//         <li><a href="#" class="nav-link px-2 link-dark">�����˻�</a></li>
//       </ul>

//       <div class="col-md-3 text-end">
//         <button type="button" class="btn btn-outline-Secondary me-3">�α���</button>
//         <button type="button" class="btn btn-outline-Secondary me-4">ȸ������</button>
//       </div>
//     </header>
//   </div>
  
//     <div class="container">
//     <footer class="py-3 my-4">
//     <ul class="nav justify-content-center border-bottom pb-3 mb-3">
//         <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
//         <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">����</a></li>
//         <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">�˻�</a></li>
//     </ul>
//     <p class="text-center text-muted">&copy; 2022 Project, Hosptial</p>
//   </footer>
// </div>
// </>
//     )
// }
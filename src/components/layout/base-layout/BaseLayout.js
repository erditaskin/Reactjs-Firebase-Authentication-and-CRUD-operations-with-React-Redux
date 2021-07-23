import Navbar from 'components/layout/navbar/Navbar';

export default function Layout(props) {
  return (
    <div>
      <Navbar />
      <section className="moving-wave">
        {props.children}
      </section>
    </div>
  );
}
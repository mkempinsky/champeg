import Nav from '../Nav';
import AgeOverlay from '../AgeOverlay';

const Layout = (props) => {
    return (
        <div className="layout">
            <AgeOverlay />
            <Nav />
            {props.children}
        </div>
    );
};
export default Layout;

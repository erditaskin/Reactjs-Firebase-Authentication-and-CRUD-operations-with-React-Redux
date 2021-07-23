import { connect } from "react-redux";
import { signOut } from "actions/auth";
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = ({
	signOut,
	auth
}) => {
	return (
		<Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="d-flex flex-grow-1">
				<span className="w-100 d-lg-none d-block"></span>
				<Link className="navbar-brand" aria-current="page" to="/">Inventory Task</Link>
			</div>
			<div className="collapse navbar-collapse flex-grow-1 text-right">
				<ul className="navbar-nav ml-auto flex-nowrap ml-auto">
					<li className="nav-item">
						<Link className="nav-link" to="/products">Products</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="#" onClick={signOut}><span className="muted">({auth.user.email})</span> Logout</Link>
					</li>
				</ul>
			</div>
		</Nav>
	);
};

function mapStateToProps(state) {
	return {
		auth: state.auth
	};
}

function mapDispatchToProps(dispatch) {
	return {
		signOut: () => dispatch(signOut())
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Navbar);
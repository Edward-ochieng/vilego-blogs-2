import "./Header.css";

export default function Header() {
    return (
            <div className="bady">
                    <h2 className="p">YOUR ONE STOP SOLUTION FOR BLOGS</h2>
                    <a href="./Login">
                        <button className="button hover:bg-sky-700">Get Started</button>
                        </a>
                    <img className="hme" src="https://images.pexels.com/photos/4911253/pexels-photo-4911253.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </div>
);
}
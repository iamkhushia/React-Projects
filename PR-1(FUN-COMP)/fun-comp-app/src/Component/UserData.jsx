
import "./UserData.css";

const UserDataCard = ({ name, email, phone, address, company, Com_position, education, birthdate ,src}) => {

    return (
        <div className="user-data-card">
            <h2>User Profile Card</h2>
            <img
                src={src}
                alt=""
            />
            
            <h4>Name :- {name}</h4>
            <h4>Email :- {email}</h4>
            <h5>Phone :- {phone}</h5>
            <h5>Address :- {address}</h5>
            <h5>Birth Date :- {birthdate}</h5>
            <h5>Education :- {education}</h5>
            <h5>Company :- {company}</h5>
            <h5>Com_position :- {Com_position}</h5>

        </div>
    );
};

export default UserDataCard;

import "../assets/CSS/contactus.css";

function Locationcontact(){
    return(
        <div className="map-container">
  <iframe
    title="RC Fitness Location"
    src="https://www.google.com/maps?q=R+C+FITNESS+Noida&output=embed"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
    )
}
export default Locationcontact;
import React from 'react';
import { FaBook, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons from react-icons
import '../Program/Program.css'; 

const Program = () => {
  return (
    <div className="program-container">
      <h3 className="program-title">Why Choose Us</h3>
      <div className="row">
        {/* Reason 1 */}
        <div className="col-sm-4">
          <div className="program-reason">
            <FaBook className="program-icon" />
            <h4 className="program-reason-title" style={{ color: '#4cc9f0' }}>Active Learning</h4>
            <p className="program-reason-description">We promote active learning to engage students in the learning process actively.</p>
          </div>
        </div>
        {/* Reason 2 */}
        <div className="col-sm-4">
          <div className="program-reason">
            <FaGlobe className="program-icon" />
            <h4 className="program-reason-title" style={{ color: 'yellowgreen' }}>Environment</h4>
            <p className="program-reason-description">Our environment fosters creativity and exploration, providing the perfect setting for learning.</p>
          </div>
        </div>
        {/* Reason 3 */}
        <div className="col-sm-4">
          <div className="program-reason">
            <FaMapMarkerAlt className="program-icon" />
            <h4 className="program-reason-title" style={{ color: '#ffb703' }}>Location</h4>
            <p className="program-reason-description">Conveniently located in the heart of the city, making it accessible for families.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;

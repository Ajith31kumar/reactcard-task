import React from 'react';

function Message({ plan, price, users, projects, access, privateproj, phone, subdomain, reports }) {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">{plan}</h5>
          <h6 className="card-price text-center">{price}<span className="period">/month</span></h6>
          <ul className="fa-ul">
            <li><span className="fa-li"><i className="fas fa-check"></i></span>{users}</li>
            <li><span className="fa-li"><i className="fas fa-check"></i></span>{projects}</li>
            <li><span className="fa-li"><i className="fas fa-check"></i></span>{access}</li>
            <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{privateproj}</li>
            <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{phone}</li>
            <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{subdomain}</li>
            <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{reports}</li>
          </ul>
          <div className="d-grid">
            <a href="#" className="btn btn-primary text-uppercase">Button</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;

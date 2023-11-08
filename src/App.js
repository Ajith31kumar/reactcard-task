//import logo from './logo.svg';
import './App.css';
import Message from './Message';

function App() {
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          <Message
            plan="Free"
            price="$0"
            users="Single User"
            projects="5GB Storage"
            access="Community Access"
            privateproj="Unlimited Private Projects"
            phone="Dedicated Phone Support"
            subdomain="Free Subdomain"
            reports="Monthly Status Reports"></Message>
          
          <Message
            plan="Pluse"
            price="$9"
            users="Single User"
            projects="50GB Storage"
            access="Community Access"
            privateproj="Unlimited Private Projects"
            phone="Dedicated Phone Support"
            subdomain="Free Subdomain"
            reports="Monthly Status Reports"></Message>
          
          <Message
            plan="Pro"
            price="$49"
            users="Unlimited users"
            projects="150GB Storage"
            access="Community Access"
            privateproj="Unlimited Private Projects"
            phone="Dedicated Phone Support"
            subdomain="Unlimited Free Subdomain"
            reports="Monthly Status Reports"></Message>
         {/* <div></div> */}
        </div>
      </div>
    </section>
  );
}

export default App;

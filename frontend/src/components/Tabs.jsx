import { useState } from 'react';
import '../App.css';

function Tabs() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs flex">
        <button
          className={`tabs flex-grow ${activeTab === 1 ? "tabs active-tabs" : "tabs"}`}
          onClick={() => handleTabClick(1)}
        >
          Physical
        </button>
        <button
          className={activeTab === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => handleTabClick(2)}
        >
          Emotional
        </button>
        <button
          className={activeTab === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => handleTabClick(3)}
        >
          Sexual
        </button>
        <button
          className={activeTab === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => handleTabClick(4)}
        >
          Financial
        </button>
      </div>

      <div className="content-tabs">
        <div className={activeTab === 1 ? "content active-content" : "content"}>
          {/* <h2>Physical Abuse</h2> */}
          <hr />
          <p  className='text-left justify-left m-0 p-0'>
            Physical abuse is the use of physical force against someone in a way that injures or endangers that person. Physical assault or battering is a crime, whether it occurs inside or outside of the family. The police have the power and authority to protect you from physical attack.
            <br />
            <br />
            You might be experiencing physical abuse if your partner has or repeatedly does any of the following abusive behaviors:
          </p>
          <ul style={{ listStyleType: 'circle', margin: '0' }} className='mt-0'>
            <li>Pull your hair or punch, slap, kick, bite, choke, or smother you.</li>
            <li>Forbid or prevent you from eating or sleeping.</li>
            <li>Use weapons against you, including firearms, knives, bats, or mace.</li>
            <li>Prevent you from contacting emergency services, including medical attention or law enforcement.</li>
            <li>Harm your children or pets.</li>
            <li>Drive recklessly or dangerously with you in the car or abandon you in unfamiliar places.</li>
            <li>Force you to use drugs or alcohol, especially if you have a history of substance abuse.</li>
            <li>Trapping you in your home or preventing you from leaving.</li>
            <li>Throw objects at you.</li>
            <li>Prevent you from taking prescribed medication or deny you necessary medical treatment.</li>
          </ul>
        </div>
        <div className={activeTab === 2 ? "content active-content" : "content"}>
          {/* <h2>Emotional Abuse</h2> */}
          <hr />
          <p>
            Emotional abuse includes non-physical behaviors that are meant to control, isolate, or frighten someone. These behaviors are often more subtle and hard to identify but are just as serious as other types of abuse.
          </p>
        </div>
        <div className={activeTab === 3 ? "content active-content" : "content"}>
          {/* <h2>Sexual Abuse</h2> */}
          <hr />
          <p>
            Sexual abuse is when a partner controls the physical and sexual intimacy in a relationship. This often involves acting in a way that is non-consensual and forced.
          </p>
        </div>
        <div className={activeTab === 4 ? "content active-content" : "content"}>
          <hr />
          <p>
            Financial or economic abuse occurs when an abusive partner extends their power and control into your financial situation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
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
            <li>Prevent you from contacting emergency services, including medical acttention or law enforcement.</li>
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
            <br />
            <br />
            You might be experiencing emotional abuse if your partner has or repeatedly does any of the following abusive behaviors:
          </p>
          <ul style={{ listStyleType: 'circle', marginTop: '0', paddingTop: '0px' }}>
            <li>Calling you names, insulting you, or constantly criticizing you.</li>
            <li>Acting jealous or possessive and refusing to trust you.</li>
            <li>Isolating you from family, friends, or other people in your life because it makes someone easier to control.</li>
            <li>Attempting to control what you wear, including clothes, makeup, or hairstyles.</li>
            <li>Monitoring your activities with or without your knowledge, including demanding to know where you go, who you contact, and how you spend your time.</li>
            <li>Humiliating you in any way, especially in front of others.</li>
            <li>Gaslighting you by pretending not to understand or refusing to listen to you; questioning your recollection of facts, events, or sources; trivializing your needs or feelings; or denying previous statements or promises.
            </li>
            <li>Threatening you, your children, your family, or your pets (with or without weapons).
            </li>
            <li>Damaging your belongings, including throwing objects, punching walls, kicking doors, etc.
            </li>
            <li>Blaming you for their abusive behaviors.
            </li>
          </ul>
        </div>
        <div className={activeTab === 3 ? "content active-content" : "content"}>
          {/* <h2>Sexual Abuse</h2> */}
          <hr />
          <p>
            Sexual abuse is when a partner controls the physical and sexual intimacy in a relationship. This often involves acting in a way that is non-consensual and forced.
            <br />
            <br />
            You might be experiencing emotional abuse if your partner has or repeatedly does any of the following abusive behaviors:
          </p>
          <ul style={{ listStyleType: 'circle', marginTop: '0', paddingTop: '0px' }}>
            <li>Make you dress in a sexual way you’re uncomfortable with.</li>
            <li>Insult you in sexual ways or call you explicit names.</li>
            <li>Force or manipulate you into having sex or performing sexual acts, especially when you’re sick, tired, or physically injured from their abuse.</li>
            <li>Strangle you or restrain you during sex without your consent.</li>
            <li>Hold you down during sex without your consent.</li>
            <li>Hurt you with weapons or objects during sex.</li>
            <li>Involve other people in your sexual activities against your will.</li>
            <li>Ignore your feelings regarding sex.</li>
            <li>Force you to watch or make pornography.</li>
            <li>Intentionally give you or attempt to give you a sexually transmitted infection.</li>
          </ul>
        </div>
        <div className={activeTab === 4 ? "content active-content" : "content"}>
          <hr />
          <p>
            Financial or economic abuse occurs when an abusive partner extends their power and control into your financial situation.
            <br />
            <br />
            You might be experiencing emotional abuse if your partner has or repeatedly does any of the following abusive behaviors:
          </p>
          <ul style={{ listStyleType: 'circle', marginTop: '0', paddingTop: '0px' }}>
            <li>Maxing out your credit cards without permission, not paying credit card bills, or otherwise harming your credit score.</li>
            <li>Controlling all of the household income and keeping financial information a secret.</li>
            <li>Taking out debts in your name, sometimes without you knowing.</li>
            <li>Stopping you from being in work, education or training.</li>
            <li>Having control over spending, checking receipts, having everything in their name.</li>
            <li>Stealing money from you, your family, or your friends.</li>
            <li>Refusing to provide money for necessary or shared expenses like food, clothing, transportation, medical care, or medicine.</li>
            <li>Withdrawing money from children’s savings accounts without your permission.</li>
            <li>Providing an allowance and closely monitoring how you spend it, including demanding receipts for purchases.</li>
            <li>Living in your home but refusing to work or contribute to the household.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
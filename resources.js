class Resources {
    constructor(name, type, description){
        this.name = name,
        this.type = type,
        this.description = description
        
    }
}

const openCubord = new Resources('Open Cupboard', 'Humanitarian Aid', 'A food pantry that provides free groceries to those in need.');
const salvationArmy = new Resources('Salvation Army (Hunterdon County)', 'Humanitarian Aid', 'Provides emergency assistance, food support, and seasonal aid programs for families in need.');
const norwescap = new Resources('NORWESCAP Food Bank', 'Humanitarian Aid', 'Regional food bank serving Hunterdon County with food distribution and assistance programs.');
const hunterdonBehavioral = new Resources('Hunterdon Behavioral Health','Counseling','Offers mental health counseling, addiction services, and family support programs.');
const catholicCharities = new Resources('Catholic Charities (Clinton Area)','Counseling','Provides counseling, crisis support, and family services regardless of religious background.');
const hunterdonLibrary = new Resources('Hunterdon County Library (North County Branch)','Student Resource','Offers study spaces, tutoring programs, internet access, and academic resources for students.');
const rvcc = new Resources('Raritan Valley Community College','Student Resource','Provides educational programs, tutoring, and dual enrollment opportunities for high school students.');
const ymca = new Resources('Hunterdon County YMCA','Other', 'Community center offering fitness programs, youth activities, and wellness support.');

const all = [openCubord, salvationArmy, norwescap, hunterdonBehavioral, catholicCharities, hunterdonLibrary, rvcc, ymca];
const human = [openCubord, salvationArmy, norwescap];
const counseling = [hunterdonBehavioral, catholicCharities];
const student = [hunterdonLibrary, rvcc];
const other = [ymca];


function display(){
    if(document.getElementById('type').value === 'All'){
        displaying(all);
    }
    else if(document.getElementById('type').value === 'Humanitarian Aid'){
        displaying(human);
    }
    else if(document.getElementById('type').value === 'Counseling'){
        displaying(counseling);
    }
    else if(document.getElementById('type').value === 'Student Aid'){
        displaying(student);
    }
    else if(document.getElementById('type').value === 'Other'){
        displaying(other);
    }
}

function displaying(a){
    const inner = document.getElementById('resourceDisplay');
    inner.innerHTML = '';
    a.forEach(resource => {
        const div = document.createElement('div');
        div.classList = 'recource';
        div.innerHTML = `<h3>${resource.name}</h3><p>${resource.type}</p><p>${resource.description}</p>`;
        inner.appendChild(div);
    });
}

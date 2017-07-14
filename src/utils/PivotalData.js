export default class PivotalData {
  constructor(onSuccess, onError, projectId){
    this.onSuccess = onSuccess;
    this.onError = onError;
    this._returnData = { project:null, memberships:null, stories:null };
    this.endpoints = [
      {
        endpoint:`/projects/${projectId}`,
        key:'project'
      },
      {
        endpoint:`/projects/${projectId}/memberships/`,
        key:'memberships'
      },
      {
        endpoint:`/projects/${projectId}/stories?filter=state:delivered,finished,accepted,started,unstarted`,
        key:'stories'
      }
    ];
  }
  static token = '33150b1472cd2cf67fd662551e27a430';


  fetchData(projectID){
    this.endpoints.map(point => {
      this._fetchData(point.endpoint, point.key)
    });
  }

  _fetchData(endpoint, key){
    const token = '33150b1472cd2cf67fd662551e27a430';
    const url = `https://www.pivotaltracker.com/services/v5${endpoint}`;
    const request = new XMLHttpRequest();

    request.open('GET', url, true);
    request.setRequestHeader('X-TrackerToken', token);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        this._returnData[key] = JSON.parse(request.responseText);
        if(!!this._returnData.project && !!this._returnData.stories && !!this._returnData.memberships){
          this._postProcess();
        }
      } else {
        this.onError(request);
      }
    }.bind(this);
    request.onerror = this.onError;
    request.send();
  }

  _postProcess(){
    const data = this._returnData;
    const membersTemp = [];
    const unassigned = { id:-1, name:"Unassigned" }
    data.stories.map(s => {
      s.owners = [];
      if(s.owner_ids.length > 0){
        s.owner_ids.map(oid => {
          const perp = data.memberships.filter(m => m.person.id === oid)[0].person;
          membersTemp.push(perp)
          s.owners.push(this._clone(perp));
        })
      }else{
        membersTemp.push(unassigned)
        s.owners.push(unassigned);
      }
    });
    data.team = [...new Set(membersTemp)];
    this.onSuccess(data);
  }

  _clone(item){
    return JSON.parse(JSON.stringify(item));
  }

}

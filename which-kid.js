<which-kid>
<div>
  <kidlist></kidlist>
  <br/>
  <a href="#" onclick={pickOne}>Pick one</a>
  <div name="currentKidTag" if={currentKid}>
    Right now you love <strong id="currentKid" >{currentKid}</strong> more.
  </div>
 </div>

 <script>
this.currentKid = '';

this.pickOne = function pickOne() {
  var kidList = this.tags.kidlist.kidList;
  var i = Math.floor(Math.random()*kidList.length);
  this.currentKid = kidList[i];
}

var effect = function() {
    $("#currentKid").effect('highlight', 500);
};

 this.on('updated', effect);
</script>
</which-kid>

<kidlist>
<div>
  <div if={kidList.length == 0}>No kids defined yet</div>
  
  <ul if={kidList.length > 0}>
    <li each={kid, i in kidList}>{kid}  <a href="#" onclick={ parent.deleteKid }>Delete</a></li>
  </ul> 
  
  <input name="newKid" size="10" placeholder="enter kid name" defaultValue=''></input>
  <button onclick={addKid}>Add Kid</button>
</div>
<script>
this.kidList = ['asdf', 'zxcv', '123123', '234234'];
this.addKid = function addKid() {
  this.kidList.push(this.newKid.value);
  this.newKid.value = '';
}
this.deleteKid = function deleteKid(event) {
  this.kidList.splice(event.item.i, 1);
}
</script>
</kidlist>

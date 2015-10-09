<random-list>
<div>
  <inline-tag exports="newItem">
    <div if={ctx.list.length == 0}>No items defined yet</div>
    
    <ul if={ctx.list.length > 0}>
      <li each={item, i in ctx.list}>{item}  <a href="#" onclick={parent.ctx.deleteItem}>Delete</a></li>
    </ul> 
    
    <input name="newItem" size="10" placeholder="enter item name" defaultValue=''></input>
    <button onclick={ctx.addItem}>Add Item</button>
  </inline-tag>
  <br/>
  <inline-tag>
    <a href="#" onclick={ctx.pickOne}>Pick random item</a>
    <div if={ctx.currentItem}>
      You have selected item <highlight><strong>{ctx.currentItem}</strong></highlight> from the list.
    </div>
  </inline-tag>
 </div>

  this.currentItem = '';
  this.list = ['asdf', 'zxcv', '123123', '234234'];
  this.ctx = this;

  addItem() {
    var newItem = this.newItem;
    this.list.push(newItem.value);
    newItem.value = '';
  }
  deleteItem(event) {
    this.list.splice(event.item.i, 1);
  }
  pickOne() {
    var list = this.list;
    var i = Math.floor(Math.random()*list.length);
    this.currentItem = list[i];
  }
</random-list>

<highlight>
  <yield/>

  this.on('updated', function () {
    $(this.root).effect('highlight', 500);
  });
  this.ctx = this.parent.ctx;

</highlight>

<inline-tag>
    <yield/>
  this.ctx = this.parent.ctx;
  if (this.opts.exports) {
    this.opts.exports.split(',').forEach(function(item) {
      this.parent[item] = this[item]  
    }.bind(this));
  }
</inline-tag>
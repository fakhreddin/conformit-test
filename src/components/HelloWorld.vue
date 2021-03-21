<template>
  <div class="hello">
   <h1> {{titre }} </h1>
   <h3> {{soustitre}} </h3>
  <label>Titre</label><br>
  <input type="text" placeholder="" /><br>
  <label>Description</label><br/>
 <textarea style="width:100%" rows="6"></textarea>
 <br/>
<div class="date">
  <span><label>Date</label><input type="date" /></span> 
  
  <span style="float:right"><label>Heure</label><input type="time" /></span> 
</div>
<br/>
<h3>Nom de status </h3>
<select style="width:100%;margin-top:10px">
  <option value="val1">abc</option>
  <option value="val1">abc</option>
  <option value="val1">abc</option>
  <option value="val1">abc</option>
</select>
<h3>Employe implique </h3>
<select style="width:100%;">
   <option value="val2">kkkkk</option>
   <option value="val2">kkkkk</option>
   <option value="val2">kkkkk</option>
 </select>
 <br/>
 <label style="padding-top:10px">Temoins</label><br/>
 <textarea style="width:100%" rows="6"></textarea>
</div>
</template>

<script>



export default {
  name: 'HelloWorld',
  props: {
    titre:String,
    soustitre:String,

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.hello   {
  position: absolute;
  left: 9px;
  top: 3px;
  width: 400px;
  margin-left:0px  !important;
  text-align:left  !important
}
.date{
  float:left !important;
  margin-top:10px;
  width:100% !important
}
</style>

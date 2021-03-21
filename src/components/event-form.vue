<template>
  <div class="main">
    <h1>{{ eventRecord.title }}</h1>

    <h3>
      crée le
      {{
        new Date(eventRecord.creationDate).toISOString().substring(0, 10) +
          " à " +
          new Date(eventRecord.creationDate).getHours() +
          "h" +
          new Date(eventRecord.creationDate).getMinutes() +
          " par " +
          eventRecord.createdBy
      }}
    </h3>
    <h3>Titre</h3>
    <br />
    <InputText type="text" :value="eventRecord.title" /><br />
    <h3>Description</h3>
    <br />
    <Textarea
      :value="eventRecord.description"
      style="width:75%"
      rows="6"
    ></Textarea>
    <br />
    <div
      style="display:flex;flex-direction:row;width:100%;justify-content:space-between"
    >
      <div>
        <h3>Date</h3>

        <input
          :value="
            new Date(eventRecord.creationDate).toISOString().substring(0, 10)
          "
          type="date"
        />
      </div>

      <div>
        <h3>Heure</h3>

        <input
          type="time"
          :value="
            new Date(eventRecord.creationDate).getHours() +
              ':' +
              new Date(eventRecord.creationDate).getMinutes()
          "
        />
      </div>
    </div>
    <br />
    <h3 style="">Nom du statu</h3>
    <Dropdown
      v-model="statusName"
      :value="statusName"
      :options="status"
      optionLabel="name"
      placeholder=""
      style="width:100%"
    />

    <h3 style="">Employé Impliqué</h3>
    <Dropdown
      v-model="involvedEmployee"
      :value="involvedEmployee"
      :options="status"
      optionLabel="employe"
      placeholder=""
      style="width:100%;"
    />

    <h3>Temoins</h3>
    <Chips v-model="temoinsList"> </Chips>
  </div>
</template>

<script>
export default {
  /*     model:{
        statusName:null
    }, */
  name: "EventForm",
  props: {
    eventRecord: Object,
  },
  watch: {
    eventRecord() {
      this.temoinsList = [...this.eventRecord.Témoins];
    },
  },
  data() {
    return {
      involvedEmployee: { ...this.eventRecord.involvedEmployee },
      statusName: { ...this.eventRecord.statusName },
      temoinsList: { ...this.eventRecord.Témoins },
      status: [{ name: "Opened" }, { name: "Closed" }, { name: "InProgress" }],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  display: block;
  margin-right: auto !important;
}
h3 {
  margin: 10px 0 0;
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
.p-chips-token {
  min-width: 100px !important;
  margin-top: 3px !important;
}
::v-deep.p-chips {
  width: 100%;
}
</style>

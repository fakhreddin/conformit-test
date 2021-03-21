<template>
  <div class="p-grid">
    <div class=" p-col-3 p-ml-3" style="min-heghit:700px">
      <span style="font-weight:bold;font-size:24px">Mes évènements</span>

      <div class="event-list">
        <event-list :eventList="events" @select="selectEvent"></event-list>
      </div>
    </div>
    <div class="p-col-5 p-ml-4 p-mt-2">
      <event-form :eventRecord="eventRecord" />
    </div>
    <div style="height:30%;border-radius:15px" class="p-col-3 p-ml-5">
      <span style="font-weight:bold">Commentaires</span>
      <Comment :comments="comments" class="comment-list " />
    </div>
  </div>
</template>

<script>
import Comment from "./components/Comment.vue";
import { getEvent, GetEventComments, getEventList } from "./assets/data";
import EventList from "./components/event-list.vue";
import EventForm from "./components/event-form.vue";

export default {
  name: "App",
  components: {
    EventList,
    Comment,
    EventForm,
  },
  data() {
    return {
      selectedIncident: 47,
      comments: GetEventComments(this.selectedIncident || 47),
      events: getEventList(),
      eventRecord: getEvent(this.selectedIncident || 47),
    };
  },
  methods: {
    selectEvent(index) {
      this.comments = GetEventComments(index);
      this.eventRecord = getEvent(index);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  height: 100vh;
}
.event-list,
.comment-list {
  background-color: rgba(226, 224, 224, 0.733);
}
.event-item {
  color: rgb(5, 2, 2);
  border-radius: 10px;
  background-color: white;
  margin-left: 10px;
  margin-right: 10px;
  overflow-x: visible;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}
.comment-item {
  color: rgb(66, 66, 66);
  border-radius: 10px;
  background-color: white;
  margin-left: 10px;
  margin-right: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}
.event-item:hover {
  cursor: pointer;
  width: 400px;
  transform: scale(1.1);
}
.p-scrollpanel:hover .p-scrollpanel-bar,
.p-scrollpanel:active .p-scrollpanel-bar {
  opacity: 1;
  background: blue;
}
.event-list {
  min-height: 500px;
  border-radius: 15px;
  padding: 15px;
  overflow-y: scroll;
}
.event-item {
}
.comment-list {
}
.p-chips .p-chips-multiple-container {
  width: 100%;
}
</style>

<template>
  <div>
    <div
      class="event-item"
      v-for="eventItem in eventList"
      :key="eventItem"
      @click="selectEvent(eventItem)"
      style="  width: 275px;height:5rem;padding:10px;margin-bottom:10px;"
    >
      <h3>{{ eventItem.title }}</h3>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  name: "EventList",
  props: {
    eventList: Array,
  },
  methods: {
    selectEvent: function(eventItem) {
      console.log(eventItem.id);
      this.$emit("select", eventItem.id);
    },
  },
};
</script>

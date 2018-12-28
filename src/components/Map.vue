<template>

        <GmapMap :center="{lat:28.30612, lng:-81.43424}"
        :zoom="16"
        map-type-id="terrain"
        style="width: 100%; height: 400px">
  
    <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
  />
    </GmapMap>

</template>

<script>
export default {
    data() {
        return {
            markers: [
            {
              position: {lat:28.30612, lng:-81.43424 }
            }
          ],
        }
    }
}
</script>

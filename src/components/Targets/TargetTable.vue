<template>
  <b-container>
    <b-table :fields="targetFields" :items="targets">
      <template v-if="selectable === true" #cell(selected)="row">
        <b-form-checkbox @change="$emit('selected-target', row, $event)" />
      </template>
    </b-table>
  </b-container>
</template>

<script>
export default {
  name: 'TargetTable',
  components: {},
  props: {
    selectable: {
      type: Boolean,
      required: false,
      default: true
    },
    targets: {
      type: Array,
      required: true
    }
  },
  computed: {
    targetFields() {
      let targetFields = [];
      if (this.selectable) {
        targetFields.push({ key: 'selected', label: '' });
      }
      targetFields.push(...[{ key: 'id', sortable: true }, { key: 'name', sortable: true }, { key: 'ra' }, { key: 'dec' }]);
      return targetFields;
    }
  }
};
</script>

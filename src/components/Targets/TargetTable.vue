<template>
    <b-container>
        <div>This is a TargetTable</div>
        <b-table 
            striped
            :fields="targetFields"
            :items="targets">
        </b-table>
    </b-container>
</template>

<script>
export default {
    name: 'TargetTable',
    components: {},
    props: {
      targets: {
        type: Array,
        required: true
        },
    },
    data() {
        return {
            targetFields: [
                { 'key': 'id', 'sortable': true },
                { 'key': 'name', 'sortable': true },
                { 'key': 'ra' },
                { 'key': 'dec' },
            ],
        }
    },
    methods: {
    },
}
</script>

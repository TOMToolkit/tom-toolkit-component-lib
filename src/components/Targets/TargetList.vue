<template>
    <b-container>
        <div>This is a TargetList</div>
        <target-table></target-table>
    </b-container>
</template>
<script>
import TargetTable from '@/components/Targets/TargetTable.vue';

export default {
    name: 'TargetList',
    components: {
        TargetTable,
        // TargetFilters
    }
}
</script>

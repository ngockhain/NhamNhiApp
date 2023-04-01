export function formatNumber(value) {
    var parts = value.toString().replace(",", "").split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}
export function deFormatNumber(value) {
    if(!value || value == '') {
        return 0;
    }
    return Number(value.replaceAll(',',''));
}

export function createSaveData(app_id, raw_data, idx) {
    var save_data = {
        record: {},
        app: app_id
    };

    Object.keys(raw_data).forEach(x => {
        if (x != 'id' && x != 'isNew') {
            save_data.record[x] = {};
            save_data.record[x].value = raw_data[x];

            if(x == 'money') {
                save_data.record[x].value = deFormatNumber(raw_data[x]);
            }
        }
    })

    if(!raw_data.isNew) {
        save_data.id = raw_data.id;
    }

    return {
        raw: raw_data,
        record: save_data,
        index: idx,
    };
}

export function createRemoveData(app_id, raw_data, idx) {
    var record = {
        'app': app_id,
        'ids': [raw_data.id]
    };

    return {
        record: record,
        idx: idx
    };
}
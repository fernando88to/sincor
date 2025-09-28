import {DataGrid} from "@mui/x-data-grid";
import {Estado} from "@/type/Estado";

export const PageClientComarca = ({estados}: { estados: Estado[] }) => {
    return (
        <div style={{height: '100%', width: '100%', marginTop: '20px'}}>
            <DataGrid
                rows={estados}
                columns={[
                    {field: 'id', headerName: 'ID', width: 90},
                    {field: 'nome', headerName: 'Nome', width: 300},
                    {field: 'sigla', headerName: 'Sigla', width: 300},
                ]}
                initialState={{
                    pagination: {
                        paginationModel: {page: 0, pageSize: 50},
                    },
                }}
                pageSizeOptions={[5, 10]}
            />
        </div>
    );
}

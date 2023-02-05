import TableColumnComponent from "./TableColumnComponent";
export default function UsingFragmentInTable(){
    return (
            <>
            <h1>Using Frgment In Table</h1>
            <table border="1">
                <tbody>
                    <tr>
                        <TableColumnComponent/>
                        <TableColumnComponent/>
                        <TableColumnComponent/>
                        <TableColumnComponent/>
                        <TableColumnComponent/>
                    </tr>
                </tbody>
            </table>
            </>
    );
}
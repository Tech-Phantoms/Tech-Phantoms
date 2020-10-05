import { makeStyles } from '@material-ui/core/styles';
//card styles
const useStyles = makeStyles((theme) => ({
    MuiCardMediaRoot: {
        height: "150px",
        width: "150px",
        backgroundSize: "contain",
        backgroundSize: "100px",
        rounded: "full",
        size: "150px",
        borderRadius: "100px",
    },

    CardActions: {
        display: "flex",
        justifyContent: "space-between"
    },
    name: {
        fontSize: "2rem",
        textAlign: "center",
        marginBottom: "10px",
        width: "100%",
        transition: "0.3s ease-out"
    },
    flexContainer: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    },
    container: {
        borderWidth: "2px",
        width: "100%",
        maxWidth: "300px",
        borderRadius: "0.5rem",
        padding: "10px",
        alignSelf: "center",
        justifySelf: "center",
        boxShadow: "1px 1px 2px 2px #eee",
    }

}));

export default useStyles;
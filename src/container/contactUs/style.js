import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    sliderANDLanguageContainer:{
        maxWidth:1330,
        position:"relative",
        padding:"10px 40px",
        marginBottom:150,
        width:"97%"
    },
    languageANDsearchBoxContainer:{
        width:30,
        height:100,
        backgroundColor:"pink",
        position:"absolute",
        left:7,
        top:10
    },
    vintageCollectionsItem:{
        height:300,
        position:"relative"
    },
    vintageCollectionsMenu:{
        display:"flex",
        justifyContent:"space-between",
        minWidth:400,
        height:95,
        position:"absolute",
        bottom:50
    },
    vintageCollectionsmenuItem:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        cursor:"pointer",
        height:95
    },

}));
export default useStyles




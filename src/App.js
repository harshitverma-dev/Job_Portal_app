import './App.css';
import CreateJob from './components/CreateJob';
import ContextProvider from './context/ContextProvider';
import './style.css'
import 'react-toastify/dist/ReactToastify.css';
import MultipleView from './components/MultipleView';

function App() {
    return (
        <ContextProvider>
            <CreateJob
                CardFontSize="card-fontSize"
                CardStyle="card-style"
                cardBgColor="bg-white"
                cardBorder="card-border"
                bgColorCommon="bg-colorCommon"
                CustomOpacity="opacity-70"
                fontNormal400="font-normal"
                fontMedium500="font-medium"
                fontFamily="font-family"
                textStyle="text-xl"
                textBase="text-base"
                labelText="text-sm"
                inputField="input-field"
                inputField2="input-field-2"
                fieldsColor="fields-color"
                createBtn="create-btn"
                shadowSm="shadow-sm"
                radioWidth="w-5"
                radioHeight="h-5"
            />

            <MultipleView
                multiViewCard="multi-view-card"
                cardBgColor="bg-white"
                fontFamily="font-family"
                fontNormal400="font-normal"
                fontMedium500="font-medium"
                headTextSize="text-2xl"
                textBase="text-base"
                headTextColor="text-black"
                paraColor="muli-view-paraColor"
                parentBgColor="multi-view-cardBgParent"
                cardImg="multi-view-cardImg"
                cardWidth="w-half"
                applyBtn="apply-btn"
                externalBtn="external-btn"
            />
        </ContextProvider>
    );
}

export default App;

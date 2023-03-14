import SearchInput from "@/components/BasicComponents/SearchInput/SearchInput";
import TextInput from "@/components/BasicComponents/TextInput/TextInput";
import Switch from "@/components/BasicComponents/Switch/Switch";
import Slider from "@/components/BasicComponents/Slider/Slider";
import SettingTab from "@/components/PageComponents/SettingsTab/SettingsTab";
import dw from '@/public/dw.jpg';

export default function profile() {

    return (
        <div style={{width: '600px'}}>
            <SettingTab withBorder title={"Account"} subtitle={'Click here you edit your account settings'}/>
        </div>
    )
}
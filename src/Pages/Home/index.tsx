import Header from "../../components/Header";
import { ListBook } from "../../components/ListBook";
import Search from "../../components/Search";
import { HomeContainer } from "./style";

export default function Home() {
    return (
        <HomeContainer>
            <Header />
            <Search />
            <ListBook />
        </HomeContainer>
 
    );
}
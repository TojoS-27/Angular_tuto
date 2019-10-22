import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppareilViewComponent } from "./appareil-view/appareil-view.component";
import { AuthComponent } from "./auth/auth.component";
import { SingleAppareilComponent } from "./single-appareil/single-appareil.component";
import { FourOhFourComponent } from "./four-oh-four/four-oh-four.component";
import { AuthGuard } from "./services/auth-guard.service";
import { EditAppareilComponent } from "./edit-appareil/edit-appareil.component";
import { UserListComponent } from "./user-list/user-list.component";

const routes: Routes = [
  {
    path: "appareils",
    canActivate: [AuthGuard],
    component: AppareilViewComponent
  },
  {
    path: "appareils/:id",
    canActivate: [AuthGuard],
    component: SingleAppareilComponent
  },
  { path: "edit", canActivate: [AuthGuard], component: EditAppareilComponent },
  { path: "users", canActivate: [AuthGuard], component: UserListComponent },
  { path: "auth", component: AuthComponent },
  { path: "", component: AppareilViewComponent },
  { path: "not-found", component: FourOhFourComponent },
  { path: "**", redirectTo: "/not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

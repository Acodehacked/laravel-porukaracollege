<?php

use App\Http\Controllers\CourseController;
use App\Http\Controllers\HompageController;
use App\Http\Controllers\ProfileController;
use App\Models\Course;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::get('admin/dashboard', function () {
    return Inertia::render('Dashboard', [
        'courses' => Inertia::lazy(fn() => Course::all()),
    ]);
})->middleware(['auth'])->name('dashboard');
// publicShow
Route::get('/Course/{slug}',[CourseController::class,'publicShow']);
Route::get('/Course', function(){
    return Inertia::render('Common/Courses/Index',[
        'courses' => Course::all()
    ]);
})->name('course');
Route::get('/Administration/FYUGProgrammes',[HompageController::class,'fyugprogrammes']);
Route::get('/AboutCollege',[HompageController::class,'aboutcollege']);
Route::get('/AboutCollege/OurPatron',[HompageController::class,'ourpatron']);
Route::get('/AboutCollege/Principal',[HompageController::class,'principal']);
Route::get('/AboutCollege/EducationPolicyStatement',[HompageController::class,'educationpolicy']);
Route::get('/AboutCollege/Founder',[HompageController::class,'founder']);
Route::get('/AboutCollege/Management',[HompageController::class,'management']);
Route::get('/Administration/OurTorchBearers',[HompageController::class,'torch']);
Route::get('/Administration/Faculty',[HompageController::class,'faculty']);
Route::get('/RulesRegulations',[HompageController::class,'rulesregulations']);
Route::get('/StudentCounselling',[HompageController::class,'studentscounselling']);
Route::get('/LeaveApplication',[HompageController::class,'leaveapplication']);
Route::get('/Activities/NSS',[HompageController::class,'nss']);
Route::get('/Activities',[HompageController::class,'activities']);
Route::get('/Contact',[HompageController::class,'contact']);
Route::get('/Latest-Events',[HompageController::class,'latestevents']);
Route::get('/Announcements',[HompageController::class,'annnouncements']);
Route::get('/AddonCourses',[HompageController::class,'addoncourses']);
Route::get('/Admission',[HompageController::class,'admission']);


Route::middleware('auth')->group(function () {
    Route::get('admin/login',function(){
        return redirect()->to(route('dashboard'));
    });
    Route::get('admin',function(){
        return redirect()->to(route('dashboard'));
    });
    Route::get('admin/courses', [CourseController::class, 'index'])->name('admincourses.index');
    Route::get('admin/courses/create', [CourseController::class, 'create'])->name('admincourses.create');
    Route::post('admin/courses', [CourseController::class, 'store'])->name('admincourses.store');
    Route::put('admin/courses/{id}', [CourseController::class, 'update'])->name('admincourses.update');
    Route::get('admin/courses/{id}', [CourseController::class, 'show'])->name('admincourses.show');
    Route::delete('admin/courses/{id}', [CourseController::class, 'destroy'])->name('admincourses.destroy');


    Route::get('admin/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('admin/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('admin/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
